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
export type GiBrassEyeProps = typeof __propDef.props;
export type GiBrassEyeEvents = typeof __propDef.events;
export type GiBrassEyeSlots = typeof __propDef.slots;
export default class GiBrassEye extends SvelteComponentTyped<GiBrassEyeProps, GiBrassEyeEvents, GiBrassEyeSlots> {
}
export {};
