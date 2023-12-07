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
export type TiEyeProps = typeof __propDef.props;
export type TiEyeEvents = typeof __propDef.events;
export type TiEyeSlots = typeof __propDef.slots;
export default class TiEye extends SvelteComponentTyped<TiEyeProps, TiEyeEvents, TiEyeSlots> {
}
export {};
