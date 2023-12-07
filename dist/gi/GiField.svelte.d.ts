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
export type GiFieldProps = typeof __propDef.props;
export type GiFieldEvents = typeof __propDef.events;
export type GiFieldSlots = typeof __propDef.slots;
export default class GiField extends SvelteComponentTyped<GiFieldProps, GiFieldEvents, GiFieldSlots> {
}
export {};
