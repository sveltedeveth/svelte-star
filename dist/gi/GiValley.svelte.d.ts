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
export type GiValleyProps = typeof __propDef.props;
export type GiValleyEvents = typeof __propDef.events;
export type GiValleySlots = typeof __propDef.slots;
export default class GiValley extends SvelteComponentTyped<GiValleyProps, GiValleyEvents, GiValleySlots> {
}
export {};
