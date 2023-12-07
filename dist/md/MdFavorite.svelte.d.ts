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
export type MdFavoriteProps = typeof __propDef.props;
export type MdFavoriteEvents = typeof __propDef.events;
export type MdFavoriteSlots = typeof __propDef.slots;
export default class MdFavorite extends SvelteComponentTyped<MdFavoriteProps, MdFavoriteEvents, MdFavoriteSlots> {
}
export {};
