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
export type FaPinterestPProps = typeof __propDef.props;
export type FaPinterestPEvents = typeof __propDef.events;
export type FaPinterestPSlots = typeof __propDef.slots;
export default class FaPinterestP extends SvelteComponentTyped<FaPinterestPProps, FaPinterestPEvents, FaPinterestPSlots> {
}
export {};
