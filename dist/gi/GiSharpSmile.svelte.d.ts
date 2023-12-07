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
export type GiSharpSmileProps = typeof __propDef.props;
export type GiSharpSmileEvents = typeof __propDef.events;
export type GiSharpSmileSlots = typeof __propDef.slots;
export default class GiSharpSmile extends SvelteComponentTyped<GiSharpSmileProps, GiSharpSmileEvents, GiSharpSmileSlots> {
}
export {};
