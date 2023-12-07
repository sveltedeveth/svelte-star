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
export type GiOverdriveProps = typeof __propDef.props;
export type GiOverdriveEvents = typeof __propDef.events;
export type GiOverdriveSlots = typeof __propDef.slots;
export default class GiOverdrive extends SvelteComponentTyped<GiOverdriveProps, GiOverdriveEvents, GiOverdriveSlots> {
}
export {};
