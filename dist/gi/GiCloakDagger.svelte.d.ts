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
export type GiCloakDaggerProps = typeof __propDef.props;
export type GiCloakDaggerEvents = typeof __propDef.events;
export type GiCloakDaggerSlots = typeof __propDef.slots;
export default class GiCloakDagger extends SvelteComponentTyped<GiCloakDaggerProps, GiCloakDaggerEvents, GiCloakDaggerSlots> {
}
export {};
