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
export type GiMorbidHumourProps = typeof __propDef.props;
export type GiMorbidHumourEvents = typeof __propDef.events;
export type GiMorbidHumourSlots = typeof __propDef.slots;
export default class GiMorbidHumour extends SvelteComponentTyped<GiMorbidHumourProps, GiMorbidHumourEvents, GiMorbidHumourSlots> {
}
export {};
