## Locally:

Create Dockerfile for pocketbase (examples on their website)
Use the linux version

```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
cat ~/.ssh/id_rsa.pub
// Copy public key
```

#### Configure hetzner server:

-   Go to HETZNER Cloud
-   Create account
-   Choose server type (I go for CPX11 - 2vCPU, 2GB RAM, 40GB Disk, 20TB Traffic)
-   Choose ipv4 or ipv6 (My ISP does not work well with ipv6)
-   Add SSH key
-   Firewall > Inbound > Any IPv4, Any IPv6 TCP port: 8080

#### Locally:

```
ssh root@[hetzner-ip]
scp ~/[path to file]/Dockerfile root@[hetzner-ip]:/root/Dockerfile
```

## Server:

```
sudo apt update

sudo apt upgrade

sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o
/usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update

sudo apt install -y docker-ce docker-ce-cli containerd.io

sudo usermod -aG docker $USER

sudo docker build -t pocketbase-app .

sudo docker run --restart=always -d -p 8080:8080 --name pocketbase-container pocketbase-app
```

Launch app and configure account

app runs at: http://[hetzner ip]:8080/\_/

## Backups:

#### Auto

-   Enable auto-backup
-   Use predefined CRON job eg. 0 0 \* \* 0 for every week on Sunday

#### S3

-   Enable S3 backups
-   Create S3 bucket on AWS (I used default for everything)
-   Get the:
    -   endpoint: eg. s3.amazonaws.com
    -   bucket: bucket-name
    -   region: eg. eu-north-1
    -   access key: create key or use existing one
    -   secret: create secret or use existing one
-   Verify connection and create backup

## Useful commands:

```
sudo docker rm pocketbase-container

sudo docker stop [id]

docker rmi [id]

docker rmi $(docker images -q)

docker start pocketbase-container

docker images

sudo docker ps

sudo docker ps -a

```
