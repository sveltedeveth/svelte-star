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
export type GiVikingChurchProps = typeof __propDef.props;
export type GiVikingChurchEvents = typeof __propDef.events;
export type GiVikingChurchSlots = typeof __propDef.slots;
export default class GiVikingChurch extends SvelteComponentTyped<GiVikingChurchProps, GiVikingChurchEvents, GiVikingChurchSlots> {
}
export {};
