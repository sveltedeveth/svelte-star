import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DiYahooProps = typeof __propDef.props;
export type DiYahooEvents = typeof __propDef.events;
export type DiYahooSlots = typeof __propDef.slots;
export default class DiYahoo extends SvelteComponentTyped<DiYahooProps, DiYahooEvents, DiYahooSlots> {
}
export {};
