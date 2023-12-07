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
export type GiHoofProps = typeof __propDef.props;
export type GiHoofEvents = typeof __propDef.events;
export type GiHoofSlots = typeof __propDef.slots;
export default class GiHoof extends SvelteComponentTyped<GiHoofProps, GiHoofEvents, GiHoofSlots> {
}
export {};
