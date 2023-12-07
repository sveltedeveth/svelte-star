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
export type GiHealthCapsuleProps = typeof __propDef.props;
export type GiHealthCapsuleEvents = typeof __propDef.events;
export type GiHealthCapsuleSlots = typeof __propDef.slots;
export default class GiHealthCapsule extends SvelteComponentTyped<GiHealthCapsuleProps, GiHealthCapsuleEvents, GiHealthCapsuleSlots> {
}
export {};
