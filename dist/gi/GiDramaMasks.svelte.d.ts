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
export type GiDramaMasksProps = typeof __propDef.props;
export type GiDramaMasksEvents = typeof __propDef.events;
export type GiDramaMasksSlots = typeof __propDef.slots;
export default class GiDramaMasks extends SvelteComponentTyped<GiDramaMasksProps, GiDramaMasksEvents, GiDramaMasksSlots> {
}
export {};
