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
export type GiLaserBlastProps = typeof __propDef.props;
export type GiLaserBlastEvents = typeof __propDef.events;
export type GiLaserBlastSlots = typeof __propDef.slots;
export default class GiLaserBlast extends SvelteComponentTyped<GiLaserBlastProps, GiLaserBlastEvents, GiLaserBlastSlots> {
}
export {};
