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
export type GiFlangedMaceProps = typeof __propDef.props;
export type GiFlangedMaceEvents = typeof __propDef.events;
export type GiFlangedMaceSlots = typeof __propDef.slots;
export default class GiFlangedMace extends SvelteComponentTyped<GiFlangedMaceProps, GiFlangedMaceEvents, GiFlangedMaceSlots> {
}
export {};
