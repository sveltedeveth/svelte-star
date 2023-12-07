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
export type GiForwardFieldProps = typeof __propDef.props;
export type GiForwardFieldEvents = typeof __propDef.events;
export type GiForwardFieldSlots = typeof __propDef.slots;
export default class GiForwardField extends SvelteComponentTyped<GiForwardFieldProps, GiForwardFieldEvents, GiForwardFieldSlots> {
}
export {};
