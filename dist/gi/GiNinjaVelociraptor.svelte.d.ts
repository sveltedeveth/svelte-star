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
export type GiNinjaVelociraptorProps = typeof __propDef.props;
export type GiNinjaVelociraptorEvents = typeof __propDef.events;
export type GiNinjaVelociraptorSlots = typeof __propDef.slots;
export default class GiNinjaVelociraptor extends SvelteComponentTyped<GiNinjaVelociraptorProps, GiNinjaVelociraptorEvents, GiNinjaVelociraptorSlots> {
}
export {};
