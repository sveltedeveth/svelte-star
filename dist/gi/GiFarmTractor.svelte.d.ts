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
export type GiFarmTractorProps = typeof __propDef.props;
export type GiFarmTractorEvents = typeof __propDef.events;
export type GiFarmTractorSlots = typeof __propDef.slots;
export default class GiFarmTractor extends SvelteComponentTyped<GiFarmTractorProps, GiFarmTractorEvents, GiFarmTractorSlots> {
}
export {};
