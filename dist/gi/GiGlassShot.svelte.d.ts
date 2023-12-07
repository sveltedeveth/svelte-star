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
export type GiGlassShotProps = typeof __propDef.props;
export type GiGlassShotEvents = typeof __propDef.events;
export type GiGlassShotSlots = typeof __propDef.slots;
export default class GiGlassShot extends SvelteComponentTyped<GiGlassShotProps, GiGlassShotEvents, GiGlassShotSlots> {
}
export {};
