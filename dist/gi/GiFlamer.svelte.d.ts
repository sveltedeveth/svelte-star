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
export type GiFlamerProps = typeof __propDef.props;
export type GiFlamerEvents = typeof __propDef.events;
export type GiFlamerSlots = typeof __propDef.slots;
export default class GiFlamer extends SvelteComponentTyped<GiFlamerProps, GiFlamerEvents, GiFlamerSlots> {
}
export {};
