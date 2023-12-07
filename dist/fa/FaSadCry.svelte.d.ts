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
export type FaSadCryProps = typeof __propDef.props;
export type FaSadCryEvents = typeof __propDef.events;
export type FaSadCrySlots = typeof __propDef.slots;
export default class FaSadCry extends SvelteComponentTyped<FaSadCryProps, FaSadCryEvents, FaSadCrySlots> {
}
export {};
