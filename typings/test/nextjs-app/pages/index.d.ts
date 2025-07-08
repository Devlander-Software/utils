import { GetServerSideProps } from 'next';
interface HomeProps {
    serverSideResults: {
        stringTest: string;
        arrayTest: number[][];
        objectTest: any;
        mathTest: string;
        validationTest: string[];
    };
}
export default function Home({ serverSideResults }: HomeProps): any;
export declare const getServerSideProps: GetServerSideProps<HomeProps>;
export {};
