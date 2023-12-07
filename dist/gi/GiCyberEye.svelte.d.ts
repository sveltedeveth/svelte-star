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
export type GiCyberEyeProps = typeof __propDef.props;
export type GiCyberEyeEvents = typeof __propDef.events;
export type GiCyberEyeSlots = typeof __propDef.slots;
export default class GiCyberEye extends SvelteComponentTyped<GiCyberEyeProps, GiCyberEyeEvents, GiCyberEyeSlots> {
}
export {};
