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
export type GiMagnetBlastProps = typeof __propDef.props;
export type GiMagnetBlastEvents = typeof __propDef.events;
export type GiMagnetBlastSlots = typeof __propDef.slots;
export default class GiMagnetBlast extends SvelteComponentTyped<GiMagnetBlastProps, GiMagnetBlastEvents, GiMagnetBlastSlots> {
}
export {};
