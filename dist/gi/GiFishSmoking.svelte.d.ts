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
export type GiFishSmokingProps = typeof __propDef.props;
export type GiFishSmokingEvents = typeof __propDef.events;
export type GiFishSmokingSlots = typeof __propDef.slots;
export default class GiFishSmoking extends SvelteComponentTyped<GiFishSmokingProps, GiFishSmokingEvents, GiFishSmokingSlots> {
}
export {};
