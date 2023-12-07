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
export type GiSmokingVolcanoProps = typeof __propDef.props;
export type GiSmokingVolcanoEvents = typeof __propDef.events;
export type GiSmokingVolcanoSlots = typeof __propDef.slots;
export default class GiSmokingVolcano extends SvelteComponentTyped<GiSmokingVolcanoProps, GiSmokingVolcanoEvents, GiSmokingVolcanoSlots> {
}
export {};
