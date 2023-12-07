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
export type GiPearProps = typeof __propDef.props;
export type GiPearEvents = typeof __propDef.events;
export type GiPearSlots = typeof __propDef.slots;
export default class GiPear extends SvelteComponentTyped<GiPearProps, GiPearEvents, GiPearSlots> {
}
export {};
