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
export type GiCloakProps = typeof __propDef.props;
export type GiCloakEvents = typeof __propDef.events;
export type GiCloakSlots = typeof __propDef.slots;
export default class GiCloak extends SvelteComponentTyped<GiCloakProps, GiCloakEvents, GiCloakSlots> {
}
export {};
