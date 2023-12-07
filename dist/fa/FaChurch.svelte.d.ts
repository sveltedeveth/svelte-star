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
export type FaChurchProps = typeof __propDef.props;
export type FaChurchEvents = typeof __propDef.events;
export type FaChurchSlots = typeof __propDef.slots;
export default class FaChurch extends SvelteComponentTyped<FaChurchProps, FaChurchEvents, FaChurchSlots> {
}
export {};
