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
export type DiYahooSmallProps = typeof __propDef.props;
export type DiYahooSmallEvents = typeof __propDef.events;
export type DiYahooSmallSlots = typeof __propDef.slots;
export default class DiYahooSmall extends SvelteComponentTyped<DiYahooSmallProps, DiYahooSmallEvents, DiYahooSmallSlots> {
}
export {};
