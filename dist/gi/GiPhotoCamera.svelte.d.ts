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
export type GiPhotoCameraProps = typeof __propDef.props;
export type GiPhotoCameraEvents = typeof __propDef.events;
export type GiPhotoCameraSlots = typeof __propDef.slots;
export default class GiPhotoCamera extends SvelteComponentTyped<GiPhotoCameraProps, GiPhotoCameraEvents, GiPhotoCameraSlots> {
}
export {};
