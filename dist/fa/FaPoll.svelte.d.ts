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
export type FaPollProps = typeof __propDef.props;
export type FaPollEvents = typeof __propDef.events;
export type FaPollSlots = typeof __propDef.slots;
export default class FaPoll extends SvelteComponentTyped<FaPollProps, FaPollEvents, FaPollSlots> {
}
export {};
