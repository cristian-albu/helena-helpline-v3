"use client";
import Button from "@/components/Button";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import Title from "@/components/Title";

const Home = () => {
    return (
        <main>
            <Section>
                <Grid cols={2}>
                    <Title h="h1">
                        Support service offered to women who are in a situation of risk regarding their safety, accessible
                        NON STOP.
                    </Title>

                    <Button ariaLabel="Button goes brrrr" onClicky={() => console.log("Something")}>
                        Text
                    </Button>
                    <Button ariaLabel="Button goes brrrr">Text</Button>
                </Grid>
                <Grid cols={4}>
                    <div className="bg-black w-full h-[50px]" />
                    <div className="bg-black w-full h-[50px]" />
                    <div className="bg-black w-full h-[50px]" />
                    <div className="bg-black w-full h-[50px]" />
                    <div className="bg-black w-full h-[50px]" />
                    <div className="bg-black w-full h-[50px]" />
                </Grid>
            </Section>
        </main>
    );
};

export default Home;
