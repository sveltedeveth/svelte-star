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
export type GiShieldReflectProps = typeof __propDef.props;
export type GiShieldReflectEvents = typeof __propDef.events;
export type GiShieldReflectSlots = typeof __propDef.slots;
export default class GiShieldReflect extends SvelteComponentTyped<GiShieldReflectProps, GiShieldReflectEvents, GiShieldReflectSlots> {
}
export {};
