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
export type FaPinterestProps = typeof __propDef.props;
export type FaPinterestEvents = typeof __propDef.events;
export type FaPinterestSlots = typeof __propDef.slots;
export default class FaPinterest extends SvelteComponentTyped<FaPinterestProps, FaPinterestEvents, FaPinterestSlots> {
}
export {};
