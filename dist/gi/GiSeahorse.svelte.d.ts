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
export type GiSeahorseProps = typeof __propDef.props;
export type GiSeahorseEvents = typeof __propDef.events;
export type GiSeahorseSlots = typeof __propDef.slots;
export default class GiSeahorse extends SvelteComponentTyped<GiSeahorseProps, GiSeahorseEvents, GiSeahorseSlots> {
}
export {};
