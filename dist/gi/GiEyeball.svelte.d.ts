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
export type GiEyeballProps = typeof __propDef.props;
export type GiEyeballEvents = typeof __propDef.events;
export type GiEyeballSlots = typeof __propDef.slots;
export default class GiEyeball extends SvelteComponentTyped<GiEyeballProps, GiEyeballEvents, GiEyeballSlots> {
}
export {};
