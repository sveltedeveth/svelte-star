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
export type GiDuckPalmProps = typeof __propDef.props;
export type GiDuckPalmEvents = typeof __propDef.events;
export type GiDuckPalmSlots = typeof __propDef.slots;
export default class GiDuckPalm extends SvelteComponentTyped<GiDuckPalmProps, GiDuckPalmEvents, GiDuckPalmSlots> {
}
export {};
