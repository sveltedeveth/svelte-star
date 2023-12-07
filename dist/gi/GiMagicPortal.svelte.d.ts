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
export type GiMagicPortalProps = typeof __propDef.props;
export type GiMagicPortalEvents = typeof __propDef.events;
export type GiMagicPortalSlots = typeof __propDef.slots;
export default class GiMagicPortal extends SvelteComponentTyped<GiMagicPortalProps, GiMagicPortalEvents, GiMagicPortalSlots> {
}
export {};
