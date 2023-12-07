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
export type GiFootyFieldProps = typeof __propDef.props;
export type GiFootyFieldEvents = typeof __propDef.events;
export type GiFootyFieldSlots = typeof __propDef.slots;
export default class GiFootyField extends SvelteComponentTyped<GiFootyFieldProps, GiFootyFieldEvents, GiFootyFieldSlots> {
}
export {};
