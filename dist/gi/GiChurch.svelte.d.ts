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
export type GiChurchProps = typeof __propDef.props;
export type GiChurchEvents = typeof __propDef.events;
export type GiChurchSlots = typeof __propDef.slots;
export default class GiChurch extends SvelteComponentTyped<GiChurchProps, GiChurchEvents, GiChurchSlots> {
}
export {};
