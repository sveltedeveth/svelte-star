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
export type GiPortalProps = typeof __propDef.props;
export type GiPortalEvents = typeof __propDef.events;
export type GiPortalSlots = typeof __propDef.slots;
export default class GiPortal extends SvelteComponentTyped<GiPortalProps, GiPortalEvents, GiPortalSlots> {
}
export {};
