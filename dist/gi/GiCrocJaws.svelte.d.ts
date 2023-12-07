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
export type GiCrocJawsProps = typeof __propDef.props;
export type GiCrocJawsEvents = typeof __propDef.events;
export type GiCrocJawsSlots = typeof __propDef.slots;
export default class GiCrocJaws extends SvelteComponentTyped<GiCrocJawsProps, GiCrocJawsEvents, GiCrocJawsSlots> {
}
export {};
