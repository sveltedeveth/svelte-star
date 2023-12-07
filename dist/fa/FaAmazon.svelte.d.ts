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
export type FaAmazonProps = typeof __propDef.props;
export type FaAmazonEvents = typeof __propDef.events;
export type FaAmazonSlots = typeof __propDef.slots;
export default class FaAmazon extends SvelteComponentTyped<FaAmazonProps, FaAmazonEvents, FaAmazonSlots> {
}
export {};
