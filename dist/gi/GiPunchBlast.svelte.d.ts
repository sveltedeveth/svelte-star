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
export type GiPunchBlastProps = typeof __propDef.props;
export type GiPunchBlastEvents = typeof __propDef.events;
export type GiPunchBlastSlots = typeof __propDef.slots;
export default class GiPunchBlast extends SvelteComponentTyped<GiPunchBlastProps, GiPunchBlastEvents, GiPunchBlastSlots> {
}
export {};
