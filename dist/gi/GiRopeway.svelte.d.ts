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
export type GiRopewayProps = typeof __propDef.props;
export type GiRopewayEvents = typeof __propDef.events;
export type GiRopewaySlots = typeof __propDef.slots;
export default class GiRopeway extends SvelteComponentTyped<GiRopewayProps, GiRopewayEvents, GiRopewaySlots> {
}
export {};
