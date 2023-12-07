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
export type GiDoubleShotProps = typeof __propDef.props;
export type GiDoubleShotEvents = typeof __propDef.events;
export type GiDoubleShotSlots = typeof __propDef.slots;
export default class GiDoubleShot extends SvelteComponentTyped<GiDoubleShotProps, GiDoubleShotEvents, GiDoubleShotSlots> {
}
export {};
