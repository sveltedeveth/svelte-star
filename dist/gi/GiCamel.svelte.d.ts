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
export type GiCamelProps = typeof __propDef.props;
export type GiCamelEvents = typeof __propDef.events;
export type GiCamelSlots = typeof __propDef.slots;
export default class GiCamel extends SvelteComponentTyped<GiCamelProps, GiCamelEvents, GiCamelSlots> {
}
export {};
