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
export type GiVelociraptorProps = typeof __propDef.props;
export type GiVelociraptorEvents = typeof __propDef.events;
export type GiVelociraptorSlots = typeof __propDef.slots;
export default class GiVelociraptor extends SvelteComponentTyped<GiVelociraptorProps, GiVelociraptorEvents, GiVelociraptorSlots> {
}
export {};
