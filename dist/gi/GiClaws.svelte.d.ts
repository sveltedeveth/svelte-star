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
export type GiClawsProps = typeof __propDef.props;
export type GiClawsEvents = typeof __propDef.events;
export type GiClawsSlots = typeof __propDef.slots;
export default class GiClaws extends SvelteComponentTyped<GiClawsProps, GiClawsEvents, GiClawsSlots> {
}
export {};
