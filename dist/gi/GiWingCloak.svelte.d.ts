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
export type GiWingCloakProps = typeof __propDef.props;
export type GiWingCloakEvents = typeof __propDef.events;
export type GiWingCloakSlots = typeof __propDef.slots;
export default class GiWingCloak extends SvelteComponentTyped<GiWingCloakProps, GiWingCloakEvents, GiWingCloakSlots> {
}
export {};
